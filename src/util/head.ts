const titleDOM = document.querySelector('head>title') as HTMLElement;
const metaDOM = Array.from(document.querySelectorAll('head>meta')) as HTMLElement[];

const headPayload = {
  'title': titleDOM,
  'og:title': metaDOM[3],
  'og:description': metaDOM[4],
  'og:url': metaDOM[5],
  'og:image': metaDOM[6],
  'og:type': metaDOM[7],
  'og:site_name': metaDOM[8]
};

const defaultValue = {
  title: `SITCON 2021 學生計算機年會 | Students' Information Technology Conference`,
  description: 'SITCON 2021 奠基於今日的科技成果，貢獻明日的資訊未來：SITCON 2021「算盤的後裔」現正徵稿中！',
  url: 'https://sitcon.org/2021',
  image: 'https://sitcon.org/2021/og-image.png',
  type: 'website'
};

const head = {
  reset () {
    headPayload.title.innerText = defaultValue.title;
    headPayload['og:title'].setAttribute('content', defaultValue.title);
    headPayload['og:description'].setAttribute('content', defaultValue.description);
    headPayload['og:url'].setAttribute('content', defaultValue.url);
    headPayload['og:image'].setAttribute('content', defaultValue.image);
    headPayload['og:type'].setAttribute('content', defaultValue.type);
    headPayload['og:site_name'].setAttribute('content', defaultValue.title);
  },
  title (text: string) {
    headPayload.title.innerText = `${text} - ${defaultValue.title}`;
  },
  ogTitle (text: string) {
    headPayload['og:title'].setAttribute('content', `${text} - ${defaultValue.title}`);
  },
  ogDescription (text: string) {
    headPayload['og:description'].setAttribute('content', text);
  },
  ogImage (link: string) {
    headPayload['og:image'].setAttribute('content', link);
  },
  ogType (text: string) {
    headPayload['og:type'].setAttribute('content', text);
  },
  ogUrl (link: string) {
    headPayload['og:url'].setAttribute('content', link);
  }
};

export default head;
