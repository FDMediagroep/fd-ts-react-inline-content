export interface Props {
    className?: string;
    difference: number;
    exchange: string;
    isin: string;
    locale?: string;
    name: string;
    price: number;
    url: string;
}
export declare function Stock(props: Props): JSX.Element;
export declare const StockStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
