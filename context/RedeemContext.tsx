import React, {useState, createContext, useContext} from "react";

type Redeem = {
    id:string;
    cost: number;
    date: string;
}

type RedeemContextType = {
    currentPoints: number;
    redemptions: Redeem[];
    redeem: (amount: number) => boolean;
}

const RedeemContext = createContext<RedeemContextType | undefined>(undefined);

export function RedeemProvider({children}: {children: React.ReactNode}){
    const [currentPoints, setCurrentPoints] = useState(0);
    const [redemptions, setredemptions] = useState<Redeem[]>([]);

    const redeem = (amount: number) => {
        if(amount < currentPoints){

            const newRedemption: Redeem = {
                id: Date.now.toString(),
                cost: amount,
                date: new Date().toISOString(),
            }
            
            setCurrentPoints( prev => currentPoints-amount)
            setredemptions( prev => [...prev, newRedemption])
            return true;
        }
        else {
            return false;
        }
    }
    return(
    <RedeemContext.Provider value = {{currentPoints, redemptions, redeem}}> {children}</RedeemContext.Provider>
    )
}

export function useRedeem(){
    const context = useContext(RedeemContext);
    if(!context){
        throw new Error("useRedeem msu be used with RedeemProvider");
    }
    return context;
}