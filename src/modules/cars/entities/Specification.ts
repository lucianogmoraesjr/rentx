import { v4 as uuid } from 'uuid';

export class Specification {
  private id?: string;

  name: string;

  private description: string;

  private created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
