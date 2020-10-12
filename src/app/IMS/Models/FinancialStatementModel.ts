
 export interface Statement {
        orderId: string;
        type: string;
        nameOfTransaction: string;
        amountDebited: number;
        amountCredit: number;
        closingBalance: number;
        user: string;
    }

    export interface FinancialStatementModel {
        openingBalance: number;
        closingBalance: number;
        uTenantId: string;
        user: string;
        statements: Statement[];
        created:Date;
    }