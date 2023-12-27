import { ChatIdPageProps } from "@/app/(chat)/(routes)/chat/[chatId]/page";
import { auth, redirectToSignIn } from "@clerk/nextjs";

const CharactersList = async ({ params }: ChatIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Characters</h3>
      <div className="text-muted-foreground text-sm flex flex-row flex-wrap gap-5">
        <div className="h-48 w-48 flex flex-col justify-center items-center bg-purple-100 border rounded-md ">
          <img
            className="h-24 w-24 border rounded-md"
            src="https://res.cloudinary.com/daerz8tdl/image/upload/v1703560405/nn2mnrj9dk9jyorzyfgm.png"
            alt="img"
          />
          <a href="https://master--velvety-eclair-e2a178.netlify.app/" className="mt-3">
            Eminem
          </a>
        </div>
        <div className="h-48 w-48 flex flex-col justify-center items-center bg-purple-100 border rounded-md ">
          <img
            className="h-24 w-24 border rounded-md"
            src="https://res.cloudinary.com/daerz8tdl/image/upload/v1703559867/dsg7hga3ycttzyugcsui.png"
            alt="img"
          />
          <a href="https://master--lovely-sorbet-bc4779.netlify.app/" className="mt-3">
            Elon Musk
          </a>
        </div>
        <div className="h-48 w-48 flex flex-col justify-center items-center bg-purple-100 border rounded-md ">
          <img
            className="h-24 w-24 border rounded-md"
            src="https://res.cloudinary.com/daerz8tdl/image/upload/v1703560509/rime8l1rs55xsmsntapi.png"
            alt="img"
          />
          <a href="https://master--charming-blini-59312b.netlify.app/" className="mt-3">
          Cristiano Ronaldo
          </a>
        </div>
        <div className="h-48 w-48 flex flex-col justify-center items-center bg-purple-100 border rounded-md ">
          <img
            className="h-24 w-24 border rounded-md"
            src="https://res.cloudinary.com/daerz8tdl/image/upload/v1703560963/agitrf6w6xfob0buom86.png"
            alt="img"
          />
          <a href="https://imaginative-swan-50123b.netlify.app/" className="mt-3">
          Lady Gaga
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharactersList;