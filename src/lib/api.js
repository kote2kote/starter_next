import fetch from 'node-fetch';

// ==================================================
// getMenuData
// ==================================================
export async function getMenuData() {
  const res = await fetch(new URL(process.env.MAIN_MENU_API));
  const res2 = await res.json();
  const tmpMenuData = res2.items;
  const tmpCatData = await getCatData(); // menuにはslugがないのでカテゴリデータのslugを結合

  // --------------------------------------------------
  // ディレクトリ名とスラッグを結合
  // --------------------------------------------------
  let tmpMenuDataEdit = [];
  for (const n of tmpMenuData) {
    // カテゴリーの場合
    if (n.object === 'category') {
      n.dir = 'category';
      for (const nn of tmpCatData) {
        if (n.object_id === nn.id) {
          n.slug = nn.slug;
        }
      }
    }
    // 固定ページの場合
    else if (n.object === 'page') {
      n.dir = 'page';
      n.slug = n.object_slug;
    }
    // CPTの場合
    else {
      n.dir = 'cpt';
      n.slug = n.object_slug;
    }

    tmpMenuDataEdit.push(n);
  }
  return tmpMenuDataEdit;
}

// ==================================================
// getAllPosts
// ==================================================
export async function getAllPosts(query) {
  // console.log(query);
  let tmpPosts = [];
  let i = 1;

  const newQuery = `
    ${process.env.MAIN_REST_API}/${query.type ? query.type : 'posts'}?_embed&per_page=${
    query.per_page ? query.per_page : process.env.PER_PAGES
  }&page=${query.page ? query.page : i}&categories_exclude=1&search=${
    query.search ? query.search : ''
  }${query.categories ? '&categories=' + query.categories : []}
    ${query.tags ? '&tags=' + query.tags : []}
    `;

  // console.log(newQuery);
  const res = await fetch(new URL(newQuery));
  tmpPosts = await res.json();

  return tmpPosts;
}

// ==================================================
// getAllPostSlugs
// ==================================================
export async function getAllPostSlugs(type = 'posts') {
  let slugs = [];
  // console.log(type);
  const i = 1;
  // for (let i = 1; i < 12; i++) {
  // const element = array[index];
  const res = await fetch(
    new URL(`${process.env.MAIN_REST_API}/${type}?per_page=100&page=${i}&_embed=1`)
  );
  const tmp = await res.json();

  for (let n of tmp) {
    if (n.title.rendered.indexOf('page-dir') === -1) {
      // タイトルにpage-dirが入るものは除く
      slugs.push(n.slug);
    }
  }
  // }

  return slugs.map((slug) => {
    return {
      params: {
        slug: String(slug),
      },
    };
  });
}

// ==================================================
// getPost
// ==================================================
export async function getPost(query) {
  // console.log(query);
  const res = await fetch(
    new URL(
      `${process.env.MAIN_REST_API}/${query.type ? query.type : 'posts'}?_embed&slug=${query.slug}`
    )
  );
  const tmp = await res.json();
  // console.log(post[0]);
  const tmpPost = tmp[0];
  // console.log(tmpPost);
  let tmpPhoto = '';
  if (tmpPost._embedded['wp:featuredmedia'][0]) {
    tmpPhoto = tmpPost._embedded['wp:featuredmedia'][0].source_url;
  } else {
    tmpPhoto = 'https://test.kote2.co/wp-content/uploads/2021/02/screenshot.png';
  }
  tmpPost.thumb = tmpPhoto;

  return tmpPost;
}

// ==================================================
// getAllCatSlugs
// ==================================================
export async function getAllCatSlugs() {
  const res = await fetch(new URL(`${process.env.MAIN_REST_API}/categories?_embed&per_page=100`));
  const tmp = await res.json();
  // console.log(tmp);

  let tmpCatSlugs = [];
  for (let n of tmp) {
    tmpCatSlugs.push(n.slug);
  }
  // console.log(tmpCatSlugs);

  return tmpCatSlugs.map((slug) => {
    // console.log(slug);
    return {
      params: {
        category: String(slug),
      },
    };
  });
}

// ==================================================
// getCatData
// ==================================================
export async function getCatData(slug = '') {
  const res = await fetch(new URL(`${process.env.MAIN_REST_API}/categories?_embed&slug=${slug}`));
  const tmp = await res.json();
  // console.log(tmp);
  // const tmpCatData = tmp[0];
  // console.log(tmpCatData.name);

  return tmp;
}

// ==================================================
// getAllTagSlugs
// ==================================================
export async function getAllTagSlugs() {
  const res = await fetch(new URL(`${process.env.MAIN_REST_API}/tags?_embed&per_page=100`));
  const tmp = await res.json();

  let tags = [];
  for (let n of tmp) {
    tags.push(n.slug);
  }
  return tags.map((tag) => {
    return {
      params: {
        tag: String(tag),
      },
    };
  });
}

// ==================================================
// getTagData
// ==================================================
export async function getTagData(slug = '') {
  // console.log('tag');
  // console.log(slug);
  const res = await fetch(
    new URL(`${process.env.MAIN_REST_API}/tags?_embed&slug=${slug}&per_page=100`)
  );
  const tmp = await res.json();
  return tmp;
}
