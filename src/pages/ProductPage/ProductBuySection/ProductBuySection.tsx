import React, { FC } from "react";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import BusinessIcon from "@material-ui/icons/Business";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { ProductBuySectionBlock } from "./ProductBuySectionBlock/ProductBySectionBlock";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import { Styled } from "./styles";
import { useLocalStorage } from "../../../customHooks/useLocalStorage";

interface ProductBuySectionProps {
  id: number;
  salePrice: number;
  price: number;
  inStock: boolean;
  company: string;
  country: string;
}

export const ProductBuySection: FC<ProductBuySectionProps> = ({
  id,
  salePrice,
  price,
  inStock,
  company,
  country,
}) => {
  const favorites = "favorites";

  const { state, setData, removeData } = useLocalStorage(favorites);

  const toggleFavorites = () => {
    if (!isFavorites) {
      setData(favorites, id);
    } else {
      removeData(favorites, id);
    }
  };

  const isFavorites = state[favorites]?.includes(id.toString());

  const isDiscount = salePrice < price;

  return (
    <Styled.BuyContainer>
      <Styled.BuySection spaceEvenly>
        <div>
          {isDiscount && <Styled.StandartPrice>{price}$</Styled.StandartPrice>}
          <div>
            <Styled.Price isDiscount={isDiscount}>
              {isDiscount ? `${salePrice}$` : `${price}$`}
            </Styled.Price>
          </div>
        </div>
        <div>
          <Styled.BuyButton
            inStock={inStock}
            disabled={!inStock}
            // eslint-disable-next-line no-alert
            onClick={() => alert("you bought it")}
          >
            {inStock ? "Buy" : "Not in stock"}
          </Styled.BuyButton>
        </div>
        <div>
          <IconButton onClick={toggleFavorites}>
            {isFavorites ? (
              <FavoriteIcon color="error" fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      </Styled.BuySection>

      <ProductBuySectionBlock
        title="Seller:"
        data={company}
        icon={<BusinessIcon fontSize="large" />}
      />
      <ProductBuySectionBlock
        title="Location:"
        data={country}
        icon={<LocationOnOutlinedIcon fontSize="large" />}
      />
      <ProductBuySectionBlock
        title="Deliver in:"
        data="Choose your Country"
        icon={<LocalShippingOutlinedIcon fontSize="large" />}
      />
      <ProductBuySectionBlock
        data={`Payment upon receipt of the goods, Google Pay,
        Online card, Cashless for legal entities, Pay online with the "Pakunok Malyuka" social card,
        Cashless for individuals, PrivatPay, Apple Pay.`}
        icon={<AccountBalanceWalletOutlinedIcon fontSize="large" />}
      />
      <ProductBuySectionBlock
        data="Guarantee. Exchange / return of goods within 14 days."
        icon={<SecurityOutlinedIcon fontSize="large" />}
      />
    </Styled.BuyContainer>
  );
};
