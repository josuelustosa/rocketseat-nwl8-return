import { FeedbackType, feedbackTypes } from "..";
import { CloseButton} from "../../CloseButton";

interface FeedbackTypeStepProps {
    feedbackType: FeedbackType;
}

export function FeedbackContentStep({ feedbackType }: FeedbackTypeStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return(
        <>
            <header>
                <span className="text-xl leading-6">
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                
            </div>
        </>
    )
}