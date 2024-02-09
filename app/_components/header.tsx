import {Card, CardContent} from "@/app/_components/ui/card";
import {MenuIcon} from "lucide-react";
import {Button} from "@/app/_components/ui/button";
import Image from "next/image";

const header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="FSW barber" height={18} width={120}/>
                <Button variant="outline" size="icon" className="h-9 w-9">
                    <MenuIcon size={18}/>
                </Button>
            </CardContent>
        </Card>
    );
}

export default header;