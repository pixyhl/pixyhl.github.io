import { Modal} from '../components/Modal'

export function Footer() {
  return (
    <footer>
      <div  className="flex justify-center">
    <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
      <div className="sm:w-full px-4 md:w-1/3">
        <strong>Pixyhash LLC</strong>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/3 mt-4 md:mt-0">
        <h6 className="font-bold mb-2">Address</h6>
        <address className="not-italic mb-4 text-sm">
        32 N Gould St. Sheridan, WY 82801
        </address>
      </div>
      <div className="px-4 md:w-1/3 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <Modal/>
      </div>
    </div>
  </div>
    </footer>
  )
}
