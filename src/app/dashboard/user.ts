export class User {
  constructor(public email: string,
              public id: string,
              // tslint:disable-next-line:variable-name
              private _token: string,
              // tslint:disable-next-line:variable-name
              private _tokenExpirationDate: Date
  ) {}

  get tokenExpirationDate(): Date {
    return this._tokenExpirationDate;
  }

  get token(): string {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
