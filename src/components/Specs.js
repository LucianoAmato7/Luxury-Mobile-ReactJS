import { GiSmartphone  } from 'react-icons/gi';
import { RiCameraLensLine, RiBattery2ChargeFill } from 'react-icons/ri';
import { TbDimensions  } from 'react-icons/tb';
import { CgSmartphoneRam } from 'react-icons/cg';
import { FaDatabase } from 'react-icons/fa';

const Specs = ({item}) => {

    return(
        
        <div className="bg-blue-300 bg-opacity-75 m-auto my-3 flex flex-row justify-between border rounded-xl p-2 w-2/3"> 

            <div className="flex flex-col justify around ml-3">

                <div className="flex flex-row">
                    <GiSmartphone className="text-black text-4xl mb-5 mr-2"/>
                    <span className="text-black text-lg"> {item.screenSize}" </span>
                </div>

                <div className="flex flex-row">
                    <RiCameraLensLine className="text-black text-4xl mb-5 mr-2"/>
                    <span className="text-black text-md"> {item.camera} MP </span>
                </div>

                <div className="flex flex-row items-center">
                    <TbDimensions className="text-black text-4xl mr-2"/>
                    <span className="text-black text-md"> {item.dimension} mm </span>
                </div>


            </div>

            <div className="flex flex-col justify around mr-3">

                <div className="flex flex-row">
                    <CgSmartphoneRam className="text-black text-4xl mb-5 mr-2"/>
                    <span className="text-black text-md"> {item.ram} </span>
                </div>

                <div className="flex flex-row">
                    <FaDatabase className="text-black text-4xl mb-5 mr-2"/>
                    <span className="text-black text-md"> {item.internalMemory} </span>
                </div>

                <div className="flex flex-row items-center">
                    <RiBattery2ChargeFill className="text-black text-4xl mr-2"/>
                    <span className="text-black text-md"> {item.battery} </span>
                </div>

            </div>

        </div>
    )
}

export default Specs