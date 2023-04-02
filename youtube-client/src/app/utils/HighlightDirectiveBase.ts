export abstract class HighlightDirectiveBase {
  protected abstract setColorForNativeElement(): void;

  convertToDate(date: string) {
    return new Date(Date.parse(date));
  }

  getDateDifference(releaseDate: string): string | void {
    const currentDate = new Date();
    const diff = new Date(currentDate.getTime() - this.convertToDate(releaseDate).getTime());
    const [years, month, days] = [
      diff.getUTCFullYear() - 1970,
      diff.getUTCMonth(),
      diff.getUTCDate() - 1
    ];

    if (month > 6 || years >= 1) return '#e53935';
    if (years < 1) {
      if (month >= 1 && month <= 6) return '#ffff00';
      if (month < 1 && days >= 7) return '#00ab6b';

      return '#2F80ED';
    }
  }
}
