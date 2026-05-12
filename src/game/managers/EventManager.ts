class EventManager extends Phaser.Events.EventEmitter {
  // dispatch Events
  emitEvent(name: string, data: any) {
    this.emit(name, data);
  }

  // listen Events
  onEvent(name: string, callback: Function) {
    this.on(name, callback);
  }

  // turnoff Events
  offEvent(name: string, callback: Function) {
    this.off(name, callback);
  }

  // listen only once
  onceEvent(name: string, callback: Function) {
    this.once(name, callback);
  }
}

export default new EventManager();
