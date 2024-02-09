import {CardContent} from "@/app/_components/ui/card";
import {MenuIcon} from "lucide-react";

const header = () => {
    return (
        <Card>
            <CardContent>
                <image src="logo.png" alt="FSW barber" height={22} width={120}/>
                <button variant="outline" size="icon">
                    <MenuIcon/>
                </button>
            </CardContent>
        </Card>
    );
}

export default header;