import { AdnModalProps } from "@/types"


const Modal = ({ open, onClose, title, containerStyles, children }: AdnModalProps) => {
  return (
    
    
    <div className={`
    inset-0 flex justify-center items-center
    transition-colors
    ${open ? "visible z-100" : "invisible"}
    `}>
          <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed bg-gray-400 bg-opacity-70 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {title}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal" onClick={onClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    {children}
                    
                    <div className="flex justify-between items-center border-t border-gray-200 rounded-b">
                        
                        <div className="flex items-center p-4 md:p-5 border-gray-200 rounded-b">
                          <button data-modal-hide="static-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                          <button data-modal-hide="static-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Cancel</button>
                      </div>
                      
                      <div className="flex items-center p-4 md:p-5 border-gray-200 rounded-b">
                          <button data-modal-hide="static-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={onClose}>Back</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    // backdrop
    // <div className={`
    // inset-0 flex justify-center items-center
    // transition-colors
    // ${open ? "visible bg-gray-400 z-100" : "invisible"}
    // `}>
    //     <div onClick={(e) => e.stopPropagation() } className={`
    //         bg-white rounded-xl shadow p-6 transition-all
    //         ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
    //     `}>
    //         <button onClick={onClose} className="absolute top-2 left-2 rounded-lg text-gray-400 bg-white hover:text-gray-600">
    //             X
    //         </button>
    //         <div className="w-full md:w-[640px] lg:w-[960px]">

    //           {children}
    //         </div>
    //     </div>
    // </div>
  )
}

export default Modal


