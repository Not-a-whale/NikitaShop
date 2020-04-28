export class Shopping_item {
  public SKU: string;
  public Description: string;
  public CPT: number;
  public JHB: number;
  public DBN: number;
  public Total_Stock: number;
  public Dealer_Price: number;
  public Retail_Price: number;
  public Manufacturer: string;
  public Image_URL: string;

  constructor(
    SKU: string,
    Description: string,
    CPT: number,
    JHB: number,
    DBN: number,
    Total_Stock: number,
    Dealer_Price: number,
    Retail_Price: number,
    Manufacturer: string,
    Image_URL: string
  ) {
    (this.SKU = SKU),
      (this.Description = Description),
      (this.CPT = CPT),
      (this.JHB = JHB),
      (this.DBN = DBN),
      (this.Total_Stock = Total_Stock),
      (this.Dealer_Price = Dealer_Price),
      (this.Retail_Price = Retail_Price),
      (this.Manufacturer = Manufacturer),
      (this.Image_URL = Image_URL);
  }
}
