//import { ISelectItem } from 'src/question/dto/create-question.dto';

export interface IAnswer {
  questionId: string;
  answer: string | string[];
}

export class CreateAnswerDto {
  templateId: string;
  fatherId: string;
  answers: Array<IAnswer>;
  userEmail: string;
  userName: string;
  userId: string;
  isValid: boolean;
}
