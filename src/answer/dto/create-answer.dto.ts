//import { ISelectItem } from 'src/question/dto/create-question.dto';

export interface IAnswer {
  questionId: string;
  answer: string | string[];
}

export class CreateAnswerDto {
  templateId: string;
  answers: Array<IAnswer>;
  userEmail: string;
  userName: string;
  userId: string;
}
