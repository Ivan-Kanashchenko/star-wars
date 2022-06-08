import * as React from "react";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import BusinessIcon from "@material-ui/icons/Business";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import { Styled } from "./styles";

interface ProductBuySectionProps {
  salePrice: number;
  price: number;
  inStock: boolean;
  company: string;
  country: string;
}

export const ProductBuySection: React.FC<ProductBuySectionProps> = ({
  salePrice,
  price,
  inStock,
  company,
  country,
}) => {
  const [favorite, setFavorite] = React.useState<boolean>(false);

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
          <IconButton onClick={() => setFavorite(!favorite)}>
            {favorite ? (
              <FavoriteIcon color="error" fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      </Styled.BuySection>
      <Styled.BuySection flexStart>
        <BusinessIcon fontSize="large" />
        <Styled.Span>Reseller:</Styled.Span>
        <Styled.Span>{company}</Styled.Span>
      </Styled.BuySection>
      <Styled.BuySection flexStart>
        <LocationOnOutlinedIcon fontSize="large" />
        <Styled.Span>Location:</Styled.Span>
        <Styled.Span>{country}</Styled.Span>
      </Styled.BuySection>
      <Styled.BuySection flexStart>
        <LocalShippingOutlinedIcon fontSize="large" />
        <Styled.Span>Deliver in:</Styled.Span>
        <Styled.Span>Choose your Country</Styled.Span>
      </Styled.BuySection>
      <Styled.BuySection flexStart>
        <AccountBalanceWalletOutlinedIcon fontSize="large" />
        <Styled.Span>
          {`Payment upon receipt of the goods, Google Pay,
          Online card, Cashless for legal entities, Pay online with the "Pakunok Malyuka" social card,
          Cashless for individuals, PrivatPay, Apple Pay.`}
        </Styled.Span>
      </Styled.BuySection>
      <Styled.BuySection flexStart>
        <SecurityOutlinedIcon fontSize="large" />
        <Styled.Span>
          Guarantee. Exchange / return of goods within 14 days.
        </Styled.Span>
      </Styled.BuySection>
    </Styled.BuyContainer>
  );
};
