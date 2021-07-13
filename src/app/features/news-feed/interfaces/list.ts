export interface IFeedNews {
  id: string;
  title: string;
  preview: string;
  shortTitle: string;
  shortDescriptions: string;
  mainParagraph: string;
  descriptionsOne: string;
  descriptionsTwo: string;
  descriptionsThree: string;
  image: string;
  user: {
    name: string;
    src: string;
  };
  likes: number;
  date: {
    month: string;
    day: number;
    year: number;
  };
  tags: Array<string>
}
