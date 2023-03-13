import useInterface from "@/hooks/useInterface";
import Dropdown from "./Dropdown";

import { WarehouseProvider }from "@/modules/warehouse/context/WarehouseProvider";
import { CustomerProvider }from "@/modules/customer/context/CustomerProvider";
import { SupplierProvider }from "@/modules/supplier/context/SupplierProvider";
import { ProductProvider }from "@/modules/product/context/ProductProvider";
import { BrandProvider }from "@/modules/brand/context/BrandProvider";

import WarehouseModal from "@/modules/warehouse/components/NewModal";
import CustomerModal from "@/modules/customer/components/NewCustomerModal";
import SupplierModal from "@/modules/supplier/components/NewModal";
import ProductModal from "@/modules/product/components/NewProductModal";

const QuickActionsButton = () => {
    const { dropdownItems, isOpen, handleModal } = useInterface();
    
    return (
        <WarehouseProvider>
            <CustomerProvider>
                <SupplierProvider>
                    <ProductProvider>
                        <BrandProvider>
                            <Dropdown items={dropdownItems} className="flex items-center space-x-2" style="primary">
                                Nuevo
                            </Dropdown>
                            <WarehouseModal isOpen={isOpen.warehouse} closeModal={handleModal}/>
                            <CustomerModal isOpen={isOpen.customer} closeModal={handleModal}/>
                            <SupplierModal isOpen={isOpen.supplier} closeModal={handleModal}/>
                            <ProductModal isOpen={isOpen.product} closeModal={handleModal}/>
                        </BrandProvider>
                    </ProductProvider>
                </SupplierProvider>
            </CustomerProvider>
        </WarehouseProvider>
    );
}
 
export default QuickActionsButton;