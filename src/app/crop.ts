export class Crop {

  public name: any;
  public info: any;
  public land: any;
  public climate: any;
  public cropType: any;
  public farming: any;
  public fert: any;
  public water: any;
  public dieases: any;
  public production: any;

  public imagePath: any;

  constructor(name: any, info: any, land: any, climate: any, cropType: any, farming: any, fert: any, water: any, dieases: any, production: any, imagePath:any) {
    this.name = name;
    this.info = info;
    this.land = land;
    this.climate = climate;
    this.cropType = cropType;
    this.production = production;
    this.water = water;
    this.dieases = dieases;
    this.fert = fert;
    this.farming = farming;
    this.imagePath = imagePath;
  }
}
