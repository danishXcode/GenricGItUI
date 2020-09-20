export class PurchaseOrderModel
{
      
      purchaseOrderName: string;
      dateLoged: string;
        items?: PurchaseOrderItemModel[]
        totalAmaount: number;
        pending: number;
        paid: number;
        isComplited: boolean;
        approvedBy?: null;
   
}

export class PurchaseOrderModels
{
      PurchaseOrderModelList : PurchaseOrderModel[]
}


export class PurchaseOrderItemModel
{
      ItemName :String;
      Quantity : Number;
      Amount :Number
}