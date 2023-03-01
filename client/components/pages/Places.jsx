import { Link, useParams } from "react-router-dom";


function Places() {

    const { action } = useParams();
    console.log(action)

    return (
        <div>
            {
                action !== 'new' && (
                    <div className="text-center ">
                        <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            Add new places
                        </Link>
                    </div>
                )
            }
            {action === 'new' && (

                <div>
                    <form>
                        <h2 className="test-2xl mt-4">Title</h2>
                         <input type="text" placeholder="title, for Ex: My Lovely apt" />
                         <h2 className="test-2xl mt-4">Address</h2>
                         <input type="text" placeholder="address" />
                         <h2 className="test-2xl mt-4">Photos</h2>
                    </form>
                </div>
            )

            }
        </div>
    )
}


export default Places;