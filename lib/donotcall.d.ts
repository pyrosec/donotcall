export declare class DonotcallClient {
    savePhoneRegistration({ email, language, phone1, phone2, phone3 }: {
        email: any;
        language?: string;
        phone1?: string;
        phone2?: string;
        phone3?: string;
    }): Promise<import("axios").AxiosResponse<any, any>>;
}
