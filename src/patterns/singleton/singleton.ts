class UIThemeManager {
  private static instance: UIThemeManager;
  private currentPlatform: 'windows' | 'mac' = 'windows';

  private constructor() {}

  public static getInstance(): UIThemeManager {
    if (!UIThemeManager.instance) {
      UIThemeManager.instance = new UIThemeManager();
    }
    return UIThemeManager.instance;
  }

  public setPlatform(platform: 'windows' | 'mac'): void {
    this.currentPlatform = platform;
  }

  public getPlatform(): 'windows' | 'mac' {
    return this.currentPlatform;
  }

  public getThemeInfo(): string {
    return `Theme Manager (Platform: ${this.currentPlatform})`;
  }
}

export { UIThemeManager };
