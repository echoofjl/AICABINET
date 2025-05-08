import { Button } from "./Button";
import { Card, CardContent } from "./Card";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    action: string;
    path?: string;
    onClick: (path: string) => void;

}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, description, path = '', action, onClick }) => {
    return (
        <Card key={title} >
            <CardContent>
                {icon}
                <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
                <Button onClick={() => onClick(path)}>{action}</Button>
            </CardContent>
        </Card>
    )
}

export default FeatureCard;