import { Account } from '../interfaces/account'
import { MongoHelper } from '../infra/db/mongoDb/mongo-helper'

export interface AccountDao {
  getOne(accountId: number, expands: Array<string>): Promise<Account | null>
}

export class AccountModel implements AccountDao {
  public async getOne(accountId: number, expands: Array<string>): Promise<Account | null> {
    const db = await MongoHelper.getCollection('ACCOUNT');
    
    const stages: Array<Object> = [{
      '$match': {
        'ACCOUNT_ID': accountId
      }
    }]

    for (const expand of expands) {
      switch (expand) {
        case 'cards':
          stages.push({
            '$lookup': {
              'from': 'CARD', 
              'localField': 'ACCOUNT_ID', 
              'foreignField': 'ACCOUNT_ID', 
              'as': 'CARDS'
            }
          })
          break;
          case 'limits':
            stages.push({
              '$lookup': {
                'from': 'LIMIT', 
                'localField': 'ACCOUNT_ID', 
                'foreignField': 'ACCOUNT_ID', 
                'as': 'LIMITS'
              }
            })
            break;     
        default:
          break;
      }
    }

    console.log(stages)
    const aggregate = await db.aggregate(stages).toArray()

    let account: Account
    account = aggregate[0]

    console.log(aggregate[0])

    return account
  }
}