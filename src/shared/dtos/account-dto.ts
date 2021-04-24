import { Account } from '../../interfaces/account'

export class AccountDto implements Account {
  ACCOUNT_ID: number
  PERSON_ID: number
  STATUS_ID: number
  STATUS_DESCRIPTION: string
  CREATE_DATE: string
  DUE_DAY: number
  DELIVERY_ADDRESS: string
  NEXT_DUE_DATE: string
  NEXT_REAL_DUE_DATE: string
  CHARGE_DATE: null
  DT_SYNC: string
  CMD_SEQ: number
  DT_CAPTURE: string
  DT_PUBLISH: string
  DT_TRANSACTION: string
  ISSUER_ID: number
  ISSUER_NAME: string
  OPERATION: string
  PRODUCT_ID: number
  PRODUCT_DESCRIPTION: string
  ISSUER_BANK_NUMBER: number
  ISSUER_BRANCH_NUMBER: string
  ISSUER_ACCOUNT_NUMBER: string
  DATA_CADASTRO: string
  DATA_ULTIMA_ATUALIZACAO: string
  PRODUCT_TYPE: string
  STATUS_DATE: string
}