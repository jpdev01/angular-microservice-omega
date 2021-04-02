import { ConverterUtils } from "./ConverterUtils.model";

export class DateUtils{
    
    public calcYears(date: any): number{
        if (typeof(date) === "string"){
            date = new ConverterUtils().stringToDate(date);
        }   
        return new Date().getFullYear() - date.getFullYear();
    }


}