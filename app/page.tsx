import Button from "./components/button";
import Select from "./components/ui/select";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main className="content bg-blue-100">
      <div className="container p-4 mx-auto">
        <Button />

        <ul>
          <li className="flex gap-3 bg-white px-4 rounded items-center justify-between">
            <span className="font-bold text-sm shrink-1">Name</span>
            <div className="w-200 flex items-center gap-3">
              <Select />
              <button className="cursor-pointer">
                <XMarkIcon
                  className="h-6 w-6 text-[#013B94] "
                  aria-hidden="true"
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
