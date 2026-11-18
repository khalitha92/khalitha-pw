import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

interface CheckoutTestData {
  TestCaseID: string;
  Username: string;
  Password: string;
  ProductName: string;
  FirstName: string;
  LastName: string;
  PostalCode: string;
  ExpectedMessage: string;
  Execute: string;
}

test('reading excel',async({page})=>{
const excelFilePath = path.resolve(
  process.cwd(),
  'testdata',
  'SauceDemoTestData.xlsx'
);

if (!fs.existsSync(excelFilePath)) {
  throw new Error(`Excel file not found: ${excelFilePath}`);
}

const workbook = XLSX.readFile(excelFilePath);

const worksheet = workbook.Sheets['CheckoutData'];
if (!worksheet) {
  throw new Error('CheckoutData sheet was not found');
}
const checkoutData =
  XLSX.utils.sheet_to_json<CheckoutTestData>(
    worksheet,
    {
      defval: '',
      raw: false,
    }
  );

  console.log(checkoutData)
})
