export interface ISelectItem {
  value: string;
  label: string;
}

export class CreateQuestionDto {
  templateId: string;
  title: string;
  imageUrl: string;
  answer: string;
  listAnswers: Array<ISelectItem>;
  type: string;
  required: boolean;
}
