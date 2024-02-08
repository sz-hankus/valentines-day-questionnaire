
interface PopUpProps {
    isOpen: boolean;
    children: React.ReactNode;
}

const PopUp = ({ isOpen, children }: PopUpProps) => {

  return isOpen ? (
    <div>
      <div className="absolute left-0 top-0 bg-gray-300 opacity-50 w-full h-screen flex flex-row justify-center items-center">
      </div>

      <div className="absolute left-0 top-0 w-full h-screen flex flex-row justify-center items-center">
        {children}
      </div>
    </div>
  ) : (<></>)
}

export default PopUp;