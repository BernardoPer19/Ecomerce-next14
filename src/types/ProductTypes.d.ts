export interface ProductType {
    id:                   number;
    title:                string;
    description:          string;
    category:             string;
    price:                number;
    discountPercentage:   number;
    rating:               number;
    stock:                number;
    tags:                 string[];
    brand:                string;
    sku:                  string;
    weight:               number;
    dimensions:           Dimensions;
    warrantyInformation:  string;
    shippingInformation:  string;
    availabilityStatus:   string;
    reviews:             Review[]; 
    returnPolicy:         string;
    minimumOrderQuantity: number;
    meta:                 Meta;
    images:               string;
    thumbnail:            string;
}

export type ProductForCart = Pick<ProductType, 'id' | 'title' | 'price' | 'thumbnail'> & {
    quantity: number;
  };

export interface Dimensions {
    width:  number;
    height: number;
    depth:  number;
}

export interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode:   string;
    qrCode:    string;
}

export interface Review {
    rating:        number;
    comment:       string;
    date:          string; // Deja como string si no conviertes directamente a Date
    reviewerName:  string;
    reviewerEmail: string;
}
