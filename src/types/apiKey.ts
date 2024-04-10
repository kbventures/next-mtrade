// Define the Exchange type
export interface ApiKey {
    id: string;
    keyAlias: string;
    publicKey: string;
    secretKey: string;
    exchangeName: string;
    userId: string;
}
