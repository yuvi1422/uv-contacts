export type TSection<TypeParam> = {
  title: string;
  data: TypeParam[];
};

export type TSectionListProps = {
  sectionData: TSection<any>[];
  getItem: Function;
  handleItemPress?: Function;
};
