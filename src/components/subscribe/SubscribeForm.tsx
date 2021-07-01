import { darken, desaturate, lighten, mix } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../../styles/colors';
import config from '../../website-config';

const SubscribeFormStyles = css`
  @media (max-width: 500px) {
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

const SubscribeEmail = styled.input`
  display: block;
  padding: 10px;
  width: 100%;
  /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
  border: ${lighten('0.07', colors.lightgrey)};
  color: ${colors.midgrey};
  font-size: 1.8rem;
  line-height: 1em;
  font-weight: normal;
  user-select: text;
  border-radius: 5px;
  transition: border-color 0.15s linear;

  -webkit-appearance: none;
  :focus {
    outline: 0;
    /* border-color: color(var(--lightgrey) l(-2%)); */
    border-color: ${darken('0.02', colors.lightgrey)};
  }
`;

const SubscribeFormButton = styled.button`
  display: inline-block;
  margin: 16px 0 0 10px;
  padding: 0 20px;
  height: 41px;
  outline: none;
  color: #fff;
  font-size: 1.5rem;
  line-height: 37px;
  font-weight: 400;
  text-align: center;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
  /* background: linear-gradient(
    color(var(--yellow) whiteness(+7%)),
    color(var(--yellow) lightness(-7%) saturation(-10%)) 60%,
    color(var(--yellow) lightness(-7%) saturation(-10%)) 90%,
    color(var(--yellow) lightness(-4%) saturation(-10%))
  ); */
  background: linear-gradient(
    ${mix('0.1', '#fff', colors.yellow)},
    ${desaturate('0.1', darken('0.07', colors.yellow))} 60%,
    ${desaturate('0.1', darken('0.07', colors.yellow))} 90%,
    ${desaturate('0.1', darken('0.04', colors.yellow))}
  );
  border-radius: 5px;
  box-shadow: 0 0 0 1px inset rgba(0, 0, 0, 0.14);

  -webkit-font-smoothing: subpixel-antialiased;

  :active,
  :focus {
    /* background: color(var(--yellow) lightness(-9%) saturation(-10%)); */
    background: ${desaturate('0.1', darken('0.09', colors.yellow))};
  }
  @media (max-width: 500px) {
    margin: 10px 0 0;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  flex-grow: 1;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ACTIVE_CAMPAIGN_FORM_ACTION_URL =
  'https://productmastery.activehosted.com/proc.php?';

const formId = 1;

const SubscribeForm: React.FC = () => {
  return (
    <div className="activeCampaign">
      <form
        action={ACTIVE_CAMPAIGN_FORM_ACTION_URL}
        method="POST"
        id="_form_newsletter_"
        className="activeCampaign__form"
        noValidate
      >
        <input type="hidden" name="u" value={formId} />
        <input type="hidden" name="f" value={formId} />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <div className="activeCampaign__form_content">
          <div className="">
            <label htmlFor="email" className="_form-label"></label>
            <div className="_field-wrapper">
              <SubscribeEmail
                type="text"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
          </div>
          <div className="_button-wrapper">
            <SubscribeFormButton
              id="_form_newsletter_submit"
              className="_submit"
              type="submit"
            >
              GET MINI MBA
            </SubscribeFormButton>
          </div>
          <div className="_clear-element"></div>
        </div>
        <div className="_form-thank-you"></div>
      </form>
    </div>
  );
};

export default SubscribeForm;
