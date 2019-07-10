import Chart from 'chart.js';
import { initGlobalOptions } from "@/js/components/Charts/config";
export default {
  mounted() {
    initGlobalOptions(Chart);
  }
}
