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
declare const styles: import("styled-components").FlattenSimpleInterpolation;
export { styles as StockStyle };
