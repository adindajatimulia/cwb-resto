import Setting from '../views/pages/setting/setting';
import DiscountManagement from '../views/pages/setting/discountManagement';
import TaxManagement from '../views/pages/setting/taxManagement';
import PrinterManagement from '../views/pages/setting/printerManagement';
import Homepage from '../views/pages/homepage/homepage';
 
const routes = {
  '/': Homepage,
  '/home': Homepage,
  '/setting': Setting,
  '/setting/:verb': Setting,
};

const settingRoutes = {
  'kelola-diskon': DiscountManagement,
  'kelola-pajak': TaxManagement,
  'kelola-printer': PrinterManagement,
}
 
export { routes, settingRoutes };
