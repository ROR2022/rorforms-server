export class CreateIssueDto {
  jiraId: string;
  jiraKey: string;
  jiraUrl: string;
  summary: string;
  priority: string;
  link: string;
  userEmail: string;
  userId: string;
  template: string;
}
