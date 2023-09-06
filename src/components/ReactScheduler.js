import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";
import Navbar from "./Navbar";

export default function ReactScheduler() {
  return (
    <>
      <Navbar />
      <div class="container-fluid">
        <div class="row ">
          <div className="col-12">
            <div class="card mt-3">
              <div class="card-body bg-secondary text-center text-white">
                <h3>Placement Scheduler</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <Scheduler events={EVENTS} />
    </>
  );
}
