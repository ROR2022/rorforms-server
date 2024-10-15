export class CreateTemplateDto {
  author: string;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  questions: string[];
  isForm: boolean;
  isPublic: boolean;
  usersGuest: string[];
}
