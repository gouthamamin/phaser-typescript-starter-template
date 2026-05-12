class DeviceUtils {

    static isMobile(): boolean {
        return this.isAndroid() || this.isIOS();
    }

    static isAndroid(): boolean {
        return /Android/i.test(navigator.userAgent);
    }

    static isIOS(): boolean {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    static isDesktop(): boolean {
        return !this.isMobile();
    }

    static isPortrait(): boolean {
        return window.innerHeight > window.innerWidth;
    }

    static isLandscape(): boolean {
        return window.innerWidth > window.innerHeight;
    }

    static isTouchDevice(): boolean {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }

    static getDevicePixelRatio(): number {
        return window.devicePixelRatio || 1;
    }

    static getScreenWidth(): number {
        return window.innerWidth;
    }

    static getScreenHeight(): number {
        return window.innerHeight;
    }
};

export default DeviceUtils;