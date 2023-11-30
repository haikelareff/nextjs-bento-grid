export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "software" | "service" | "store" | "project";
export type EquipmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EquipmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@haikelareff",
    description:
      "from Mechanical Engineering to Media Publisher....now I'm a Web Developer",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@haikelareff",
    buttonSecondaryText: "1.1K",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    username: "@haikelareff",
    buttonTitle: "Follow",
    buttonLink: "https://instagram.com/@haikelareff",
    buttonSecondaryText: "44",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@haikelareff",
    buttonTitle: "Follow",
    buttonSecondaryText: "36",
    buttonLink: "https://twitter.com/haikelareff",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "software",
    title: "Video & Web App Tech Stack",
    image: "/equipments-image.jpeg",
    equipments: [
      {
        title: "Adobe Suites- Premiere Pro, After Effect, Photoshop & Audition",
        link: "https://www.amazon.com/Sony-Full-frame-Mirrorless-Interchangeable-Lens-ILCE7M3K/dp/B07B45D8WV?&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=f91877e8350da1e43b161adac6e9a6d7&camp=1789&creative=9325",
      },
      {
        title: "Next.js Framework",
        link: "https://www.amazon.com/s?k=tamron+24-75+f2.8+sony+e+mount&sprefix=tamron+24-75%252Caps%252C215&ref=nb_sb_ss_ts-doa-p_1_12&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7f90fb483df302e8131afea2f4cd89bb&camp=1789&creative=9325",
      },
      {
        title: "React Component",
        link: "https://www.amazon.com/s?k=thronmax+mdrill+one+pro&sprefix=thronmax%252Caps%252C213&ref=nb_sb_ss_ts-doa-p_7_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=ffb6dc2e55c74508300d2c5eac250e1e&camp=1789&creative=9325",
      },
      {
        title: "Typescript",
        link: "https://www.amazon.com/s?k=godox+sl60&crid=2OZLC933LK7K0&sprefix=godox+sl60%252Caps%252C213&ref=nb_sb_noss_1&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=a9fcedfbfaff1bb1301c303a45055038&camp=1789&creative=9325",
      },
      {
        title: "Tailwind CSS",
        link: "https://www.amazon.com/Godox-Umbrella-Reflector-Honeycomb-Speedlight/dp/B07H91VH4M/ref=sr_1_19?crid=3UE8NBEUUB1PI&keywords=godox+sl60+softbox&qid=1687880313&sprefix=godox+sl60+%252Caps%252C207&sr=8-19&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7cb2f6734c70d44a3491266b50eac29c&camp=1789&creative=9325",
      },
      {
        title: "Framer Motion",
        link: "https://www.amazon.com/s?k=godox+m1+rgb&crid=2UBYBKYSIYMDW&sprefix=godox+m1+rg%252Caps%252C199&ref=nb_sb_noss_2&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=3da7371f710f9f4f6af4f5817acc728a&camp=1789&creative=9325",
      },
      {
        title: "graphQL using Hygraph CMS",
        link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@haikelareff",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/haikelareff",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
  },
  {
    layout: "2x1",
    type: "store",
    title: "Hreff Store",
    icon: "",
    promotion: "",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://hreff.space/store",
  },
  {
    layout: "2x1",
    type: "store",
    title: "",
    icon: "",
    promotion: "",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://hreff.space/store",
  },
  {
    layout: "2x1",
    type: "project",
    title: "AyaDeco Gift",
    icon: "ayadeco",
    color: "#070707",
    buttonLink: "https://ayadecogift.com",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Full-stack Multilingual Blog with Next.js 13",
    username: "@haikelareff",
    description:
      "Signup for one-on-one Online Course to enhanced you digital skills",
    icon: "nextjs",
    buttonTitle: "Course",
    buttonSecondaryText: "and Service",
    buttonLink:
      "/",
  },
  {
    layout: "1x2",
    type: "project",
    title: "Borgman Review",
    description:
      "Tech & Product Review",
    icon: "/public",
    color: "#070707",
    buttonLink: "https://borgmanreview.com",
  },
];

export const siteConfig = {
  creator: "Haikel Areff",
  title: "Hreff Space",
  bio: "Malaysia Web Developer & Creative Creator",
  location: "Bangi Avenue, Malaysia",
  locationLink:
    "https://www.google.com/maps/place/Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul/@40.981133,29.063053,12z/data=!3m1!4b1!4m6!3m5!1s0x14cac790b17ba89d:0xd2d24ea0437a7ee2!8m2!3d40.981867!4d29.0576302!16zL20vMDV5cWY4?entry=ttu",
  email: "haikelareff@gmail.com",
  items: GridItems,
} as const;
