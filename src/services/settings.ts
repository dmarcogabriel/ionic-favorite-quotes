export class SettingsService {

  private bgColor: boolean = false;

  //CHANGE BG COLOR
  setBgColor(state: boolean) {
    this.bgColor = state;
  }

  //GET BG COLOR
  getBgColor() {
    return this.bgColor;
  }

}
