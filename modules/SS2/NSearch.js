module.exports = class NSearch {
  constructor() {
    this.Type = {
      ACCOUNT:                           "account",
      ACCOUNTING_BOOK:                   "accountingbook",
      ACCOUNTING_CONTEXT:                "accountingcontext",
      ACCOUNTING_PERIOD:                 "accountingperiod",
      ACTIVITY:                          "activity",
      ADV_INTER_COMPANY_JOURNAL_ENTRY:   "advintercompanyjournalentry",
      AMORTIZATION_SCHEDULE:             "amortizationschedule",
      AMORTIZATION_TEMPLATE:             "amortizationtemplate",
      ASSEMBLY_BUILD:                    "assemblybuild",
      ASSEMBLY_ITEM:                     "assemblyitem",
      ASSEMBLY_UNBUILD:                  "assemblyunbuild",
      BILLING_ACCOUNT:                   "billingaccount",
      BILLING_ACCOUNT_BILL_CYCLE:        "BillingAccountBillCycle",
      BILLING_ACCOUNT_BILL_REQUEST:      "BillingAccountBillRequest",
      BILLING_CLASS:                     "billingclass",
      BILLING_RATE_CARD:                 "billingratecard",
      BILLING_REVENUE_EVENT:             "billingrevenueevent",
      BILLING_SCHEDULE:                  "billingschedule",
      BIN:                               "bin",
      BIN_ITEM_BALANCE:                  "BinItemBalance",
      BIN_TRANSFER:                      "bintransfer",
      BIN_WORKSHEET:                     "binworksheet",
      BLANKET_PURCHASE_ORDER:            "blanketpurchaseorder",
      BOM:                               "bom",
      BOM_REVISION:                      "bomrevision",
      BUNDLE_INSTALLATION_SCRIPT:        "bundleinstallationscript",
      CALENDAR_EVENT:                    "calendarevent",
      CAMPAIGN:                          "campaign",
      CASH_REFUND:                       "cashrefund",
      CASH_SALE:                         "cashsale",
      CHARGE:                            "charge",
      CHARGE_RULE:                       "chargerule",
      CHECK:                             "check",
      CLASSIFICATION:                    "classification",
      CLIENT_SCRIPT:                     "clientscript",
      CMS_CONTENT:                       "cmscontent",
      CMS_CONTENT_TYPE:                  "cmscontenttype",
      COMMERCE_CATEGORY:                 "commercecategory",
      COMPETITOR:                        "competitor",
      COM_SEARCH_GROUP_SYN:              "ComSearchGroupSyn",
      COM_SEARCH_ONE_WAY_SYN:            "ComSearchOneWaySyn",
      CONSOLIDATED_EXCHANGE_RATE:        "consolidatedexchangerate",
      CONTACT:                           "contact",
      CONTACT_CATEGORY:                  "contactcategory",
      CONTACT_ROLE:                      "contactrole",
      COST_CATEGORY:                     "costcategory",
      COUPON_CODE:                       "couponcode",
      CREDIT_CARD_CHARGE:                "creditcardcharge",
      CREDIT_CARD_REFUND:                "creditcardrefund",
      CREDIT_MEMO:                       "creditmemo",
      CURRENCY:                          "currency",
      CUSTOMER:                          "customer",
      CUSTOMER_CATEGORY:                 "customercategory",
      CUSTOMER_DEPOSIT:                  "customerdeposit",
      CUSTOMER_MESSAGE:                  "customermessage",
      CUSTOMER_PAYMENT:                  "customerpayment",
      CUSTOMER_PAYMENT_AUTHORIZATION:    "customerpaymentauthorization",
      CUSTOMER_REFUND:                   "customerrefund",
      CUSTOMER_STATUS:                   "customerstatus",
      CUSTOM_RECORD:                     "customrecord",
      CUSTOM_TRANSACTION:                "customtransaction",
      DELETED_RECORD:                    "DeletedRecord",
      DEPARTMENT:                        "department",
      DEPOSIT:                           "deposit",
      DEPOSIT_APPLICATION:               "depositapplication",
      DESCRIPTION_ITEM:                  "descriptionitem",
      DISCOUNT_ITEM:                     "discountitem",
      DOWNLOAD_ITEM:                     "downloaditem",
      EMPLOYEE:                          "employee",
      END_TO_END_TIME:                   "EndToEndTime",
      ENTITY:                            "entity",
      ENTITY_ACCOUNT_MAPPING:            "entityaccountmapping",
      ESTIMATE:                          "estimate",
      EXPENSE_CATEGORY:                  "expensecategory",
      EXPENSE_REPORT:                    "expensereport",
      FAIR_VALUE_PRICE:                  "fairvalueprice",
      FIN_RPT_AGGREGATE_F_R:             "FinRptAggregateFR",
      FIXED_AMOUNT_PROJECT_REVENUE_RULE: "fixedamountprojectrevenuerule",
      FOLDER:                            "folder",
      FULFILLMENT_REQUEST:               "fulfillmentrequest",
      GENERIC_RESOURCE:                  "genericresource",
      GIFT_CERTIFICATE:                  "giftcertificate",
      GIFT_CERTIFICATE_ITEM:             "giftcertificateitem",
      GLOBAL_ACCOUNT_MAPPING:            "globalaccountmapping",
      GLOBAL_INVENTORY_RELATIONSHIP:     "globalinventoryrelationship",
      GL_LINES_AUDIT_LOG:                "GlLinesAuditLog",
      INBOUND_SHIPMENT:                  "inboundshipment",
      INSTALLMENT:                       "Installment",
      INTER_COMPANY_JOURNAL_ENTRY:       "intercompanyjournalentry",
      INTER_COMPANY_TRANSFER_ORDER:      "intercompanytransferorder",
      INVENTORY_ADJUSTMENT:              "inventoryadjustment",
      INVENTORY_BALANCE:                 "InventoryBalance",
      INVENTORY_COST_REVALUATION:        "inventorycostrevaluation",
      INVENTORY_COUNT:                   "inventorycount",
      INVENTORY_DETAIL:                  "inventorydetail",
      INVENTORY_ITEM:                    "inventoryitem",
      INVENTORY_NUMBER:                  "inventorynumber",
      INVENTORY_NUMBER_BIN:              "InventoryNumberBin",
      INVENTORY_NUMBER_ITEM:             "InventoryNumberItem",
      INVENTORY_STATUS:                  "inventorystatus",
      INVENTORY_STATUS_CHANGE:           "inventorystatuschange",
      INVENTORY_STATUS_LOCATION:         "InventoryStatusLocation",
      INVENTORY_TRANSFER:                "inventorytransfer",
      INVOICE:                           "invoice",
      INVT_NUMBER_ITEM_BALANCE:          "InvtNumberItemBalance",
      ISSUE:                             "issue",
      ITEM:                              "item",
      ITEM_ACCOUNT_MAPPING:              "itemaccountmapping",
      ITEM_BIN_NUMBER:                   "ItemBinNumber",
      ITEM_DEMAND_PLAN:                  "itemdemandplan",
      ITEM_FULFILLMENT:                  "itemfulfillment",
      ITEM_GROUP:                        "itemgroup",
      ITEM_LOCATION_CONFIGURATION:       "itemlocationconfiguration",
      ITEM_RECEIPT:                      "itemreceipt",
      ITEM_REVISION:                     "itemrevision",
      ITEM_SUPPLY_PLAN:                  "itemsupplyplan",
      JOB:                               "job",
      JOB_STATUS:                        "jobstatus",
      JOB_TYPE:                          "jobtype",
      JOURNAL_ENTRY:                     "journalentry",
      KIT_ITEM:                          "kititem",
      LABOR_BASED_PROJECT_REVENUE_RULE:  "laborbasedprojectrevenuerule",
      LEAD:                              "lead",
      LOCATION:                          "location",
      LOT_NUMBERED_ASSEMBLY_ITEM:        "lotnumberedassemblyitem",
      LOT_NUMBERED_INVENTORY_ITEM:       "lotnumberedinventoryitem",
      MANUFACTURING_COST_TEMPLATE:       "manufacturingcosttemplate",
      MANUFACTURING_OPERATION_TASK:      "manufacturingoperationtask",
      MANUFACTURING_ROUTING:             "manufacturingrouting",
      MAP_REDUCE_SCRIPT:                 "mapreducescript",
      MARKUP_ITEM:                       "markupitem",
      MASSUPDATE_SCRIPT:                 "massupdatescript",
      MERCHANDISE_HIERARCHY_LEVEL:       "merchandisehierarchylevel",
      MERCHANDISE_HIERARCHY_NODE:        "merchandisehierarchynode",
      MERCHANDISE_HIERARCHY_VERSION:     "merchandisehierarchyversion",
      MESSAGE:                           "message",
      MFG_PLANNED_TIME:                  "mfgplannedtime",
      NEXUS:                             "nexus",
      NON_INVENTORY_ITEM:                "noninventoryitem",
      NOTE:                              "note",
      NOTE_TYPE:                         "notetype",
      OPPORTUNITY:                       "opportunity",
      OTHER_CHARGE_ITEM:                 "otherchargeitem",
      OTHER_NAME:                        "othername",
      OTHER_NAME_CATEGORY:               "othernamecategory",
      PARTNER:                           "partner",
      PARTNER_CATEGORY:                  "partnercategory",
      PAYCHECK:                          "paycheck",
      PAYCHECK_JOURNAL:                  "paycheckjournal",
      PAYMENT_EVENT:                     "PaymentEvent",
      PAYMENT_ITEM:                      "paymentitem",
      PAYMENT_METHOD:                    "paymentmethod",
      PAYROLL_ITEM:                      "payrollitem",
      PCT_COMPLETE_PROJECT_REVENUE_RULE: "pctcompleteprojectrevenuerule",
      PERIOD_END_JOURNAL:                "periodendjournal",
      PERMISSION:                        "Permission",
      PHONE_CALL:                        "phonecall",
      PORTLET:                           "portlet",
      PRICE_BOOK:                        "pricebook",
      PRICE_LEVEL:                       "pricelevel",
      PRICE_PLAN:                        "priceplan",
      PRICING_GROUP:                     "pricinggroup",
      PROJECT_EXPENSE_TYPE:              "projectexpensetype",
      PROJECT_TASK:                      "projecttask",
      PROJECT_TEMPLATE:                  "projecttemplate",
      PROMOTION_CODE:                    "promotioncode",
      PROSPECT:                          "prospect",
      PURCHASE_CONTRACT:                 "purchasecontract",
      PURCHASE_ORDER:                    "purchaseorder",
      PURCHASE_REQUISITION:              "purchaserequisition",
      RECENT_RECORD:                     "RecentRecord",
      RESOURCE_ALLOCATION:               "resourceallocation",
      RESTLET:                           "restlet",
      RES_ALLOCATION_TIME_OFF_CONFLICT:  "ResAllocationTimeOffConflict",
      RETURN_AUTHORIZATION:              "returnauthorization",
      REVENUE_ARRANGEMENT:               "revenuearrangement",
      REVENUE_COMMITMENT:                "revenuecommitment",
      REVENUE_COMMITMENT_REVERSAL:       "revenuecommitmentreversal",
      REVENUE_PLAN:                      "revenueplan",
      REV_REC_PLAN_AND_SCHEDULE:         "RevRecPlanAndSchedule",
      REV_REC_SCHEDULE:                  "revrecschedule",
      REV_REC_TEMPLATE:                  "revrectemplate",
      ROLE:                              "Role",
      SALES_ORDER:                       "salesorder",
      SALES_ROLE:                        "salesrole",
      SALES_TAX_ITEM:                    "salestaxitem",
      SAVED_SEARCH:                      "SavedSearch",
      SCHEDULED_SCRIPT:                  "scheduledscript",
      SCHEDULED_SCRIPT_INSTANCE:         "scheduledscriptinstance",
      SCRIPT_DEPLOYMENT:                 "scriptdeployment",
      SERIALIZED_ASSEMBLY_ITEM:          "serializedassemblyitem",
      SERIALIZED_INVENTORY_ITEM:         "serializedinventoryitem",
      SERVICE_ITEM:                      "serviceitem",
      SHIP_ITEM:                         "shipitem",
      SHOPPING_CART:                     "ShoppingCart",
      SOLUTION:                          "solution",
      STATISTICAL_JOURNAL_ENTRY:         "statisticaljournalentry",
      STORE_PICKUP_FULFILLMENT:          "storepickupfulfillment",
      SUBSCRIPTION:                      "subscription",
      SUBSCRIPTION_CHANGE_ORDER:         "subscriptionchangeorder",
      SUBSCRIPTION_LINE:                 "subscriptionline",
      SUBSCRIPTION_PLAN:                 "subscriptionplan",
      SUBSCRIPTION_RENEWAL_HISTORY:      "SubscriptionRenewalHistory",
      SUBSIDIARY:                        "subsidiary",
      SUBTOTAL_ITEM:                     "subtotalitem",
      SUITELET:                          "suitelet",
      SUITE_SCRIPT_DETAIL:               "SuiteScriptDetail",
      SUPPLY_CHAIN_SNAPSHOT:             "supplychainsnapshot",
      SUPPLY_CHAIN_SNAPSHOT_DETAILS:     "SupplyChainSnapshotDetails",
      SUPPORT_CASE:                      "supportcase",
      SYSTEM_NOTE:                       "SystemNote",
      TASK:                              "task",
      TAX_DETAIL:                        "TaxDetail",
      TAX_GROUP:                         "taxgroup",
      TAX_PERIOD:                        "taxperiod",
      TAX_TYPE:                          "taxtype",
      TERM:                              "term",
      TIMESHEET_APPROVAL:                "TimesheetApproval",
      TIME_APPROVAL:                     "TimeApproval",
      TIME_BILL:                         "timebill",
      TIME_ENTRY:                        "timeentry",
      TIME_OFF_CHANGE:                   "timeoffchange",
      TIME_OFF_PLAN:                     "timeoffplan",
      TIME_OFF_REQUEST:                  "timeoffrequest",
      TIME_OFF_RULE:                     "timeoffrule",
      TIME_OFF_TYPE:                     "timeofftype",
      TIME_SHEET:                        "timesheet",
      TOPIC:                             "topic",
      TRANSACTION:                       "transaction",
      TRANSFER_ORDER:                    "transferorder",
      UBER:                              "Uber",
      UNITS_TYPE:                        "unitstype",
      USAGE:                             "usage",
      USEREVENT_SCRIPT:                  "usereventscript",
      VENDOR:                            "vendor",
      VENDOR_BILL:                       "vendorbill",
      VENDOR_CATEGORY:                   "vendorcategory",
      VENDOR_CREDIT:                     "vendorcredit",
      VENDOR_PAYMENT:                    "vendorpayment",
      VENDOR_RETURN_AUTHORIZATION:       "vendorreturnauthorization",
      WEBSITE:                           "website",
      WORKFLOW_ACTION_SCRIPT:            "workflowactionscript",
      WORKPLACE:                         "workplace",
      WORK_ORDER:                        "workorder",
      WORK_ORDER_CLOSE:                  "workorderclose",
      WORK_ORDER_COMPLETION:             "workordercompletion",
      WORK_ORDER_ISSUE:                  "workorderissue"
    };
    this.Sort = {
      ASC:  'asc',
      DESC: 'desc',
      NONE: 'none'
    };
    this.Summary = {
      AVG:   'avg',
      COUNT: 'count',
      GROUP: 'group',
      MAX:   'max',
      MIN:   'min',
      SUM:   'sum'
    };
    this.Operator = {
      AFTER:                   'after',
      ALLOF:                   'allof',
      ANY:                     'any',
      ANYOF:                   'anyof',
      BEFORE:                  'before',
      BETWEEN:                 'between',
      CONTAINS:                'contains',
      DOESNOTCONTAIN:          'doesnotcontain',
      DOESNOTSTARTWITH:        'doesnotstartwith',
      EQUALTO:                 'equalto',
      GREATERTHAN:             'greaterthan',
      GREATERTHANOREQUALTO:    'greaterthanorequalto',
      HASKEYWORDS:             'haskeywords',
      IS:                      'is',
      ISEMPTY:                 'isempty',
      ISNOT:                   'isnot',
      ISNOTEMPTY:              'isnotempty',
      LESSTHAN:                'lessthan',
      LESSTHANOREQUALTO:       'lessthanorequalto',
      NONEOF:                  'noneof',
      NOTAFTER:                'notafter',
      NOTALLOF:                'notallof',
      NOTBEFORE:               'notbefore',
      NOTBETWEEN:              'notbetween',
      NOTEQUALTO:              'notequalto',
      NOTGREATERTHAN:          'notgreaterthan',
      NOTGREATERTHANOREQUALTO: 'notgreaterthanorequalto',
      NOTLESSTHAN:             'notlessthan',
      NOTLESSTHANOREQUALTO:    'notlessthanorequalto',
      NOTON:                   'noton',
      NOTONORAFTER:            'notonorafter',
      NOTONORBEFORE:           'notonorbefore',
      NOTWITHIN:               'notwithin',
      ON:                      'on',
      ONORAFTER:               'onorafter',
      ONORBEFORE:              'onorbefore',
      STARTSWITH:              'startswith',
      WITHIN:                  'within'
    };
    this.records = [];
  }

  lookupFields(data) {
    var records = this.records.filter(record => (record.id == data.id && record.type == data.type));
    var response = {};
    if(records && records.length > 0) {
      var record = records[0];
      for(let column of data.columns) {
        var result = record.getValue(column);
        if (typeof result != 'object') {
          response[column] = record.getValue(column);
        } else {
          if (!response[column]) {
            response[column] = [];
          }
          response[column].push({
            value: record.getValue(column),
            text:  record.getText(column)
          })
        }
      }
    }

    return response;
  }

  addRecord(record) {
    this.records.push(record)
  }

  newSearch() {
    const _self = this;

    const cols = [];
    return {
      id: Math.floor(Math.random() * 10000),
      columns: cols,
      filters: [],
      run: function() {
        return {
          columns: cols, // allow for re-referencing the columns
          each: function(callback) {
            for (var i=0; i<_self.records.length; i++) {
              if (callback(_self.records[i]) !== true) {
                // XXX
                // NetSuite only continues iteration if every iteration within
                // each() returns true
                break;
              }
            }
          }
        };
      },
    };
  }

  create(opts) {
    const search = this.newSearch();
    if (opts.columns) {
      search.columns = opts.columns;
    }
    if (opts.filters) {
      search.filters = opts.filters;
    }
    return search;
  }

  load(opts) {
    const search = this.newSearch();
    search.id = opts.id;
    return search;
  }

  createFilter(opts) { return opts; }
  createColumn(opts) { return opts; }

}
