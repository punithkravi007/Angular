export class User {
  constructor(
    public email: string,
    public localId: string,
    public registered: boolean,
    private _idToken: string,
    private _refreshToken: string,
    private _tokenExpirationDate: Date,
    public password?: string,
  ) {}

  get token() {
    if (!this._tokenExpirationDate || this._tokenExpirationDate < new Date()) {
      return null;
    }
    return this._idToken;
  }
}
