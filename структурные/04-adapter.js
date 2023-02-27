class SDCard {
  connectInterfaceSD() {
    console.log('SD card connected');
  }
}

class MMCCard {
  connectInterfaceMMC() {
    console.log('MMC card connected');
  }
}

class UsbCardReader {
  plug(card) {
    this.deviceType = card.constructor.name;
    this.device = card;
  }
  connect() {
    switch (this.deviceType) {
      case 'SDCard':
        this.device.connectInterfaceSD();
        break;
      case 'MMCCard':
        this.device.connectInterfaceMMC();
        break;
    }
  }
}

let cardReader = new UsbCardReader();
const sdCard = new SDCard();
cardReader.plug(sdCard);
cardReader.connect();

const mmcCard = new MMCCard();
cardReader.plug(mmcCard);
cardReader.connect();
